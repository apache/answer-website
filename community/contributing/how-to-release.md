---
slug: /how-to-release
---

# How to Release

All Apache projects are required to follow the [Apache Release Policy](https://www.apache.org/legal/release-policy.html). This guide is intended to help you understand the policy and how to release projects at Apache.

## Release Process

1. Create a GPG key if you don't have one.
2. Create a RC tag in the git repository and write the release notes.
3. Upload release artifacts to the dev Apache SVN.
4. Verify the release artifacts.
5. Start a vote.
6. Migration candidate to the release Apache SVN.
7. Create a release.
8. Update the Download page.
9. Announce the vote result and release.

## Create a GPG key

Create a GPG key if you don't have one. You can follow the instructions [here](https://www.apache.org/dev/openpgp.html).

```shell
# create a GPG key
$ gpg --full-generate-key

# list the GPG keys
$ gpg  --keyid-format SHORT --list-keys

# upload the GPG key to the key server, xxx is the GPG key id
$ gpg --keyserver keyserver.ubuntu.com --send-key xxx

# append the GPG key to the KEYS file the svn repository
$ svn co https://dist.apache.org/repos/dist/release/answer/
$ (gpg --list-sigs xxx@apache.org && gpg --export --armor xxx@apache.org) >> KEYS
$ svn ci -m "add gpg key" 
```


## Upload the release artifacts to the dev Apache SVN

### Create a RC tag
When you want to release a new version, you need to create a new RC tag in the git repository firstly. The tag name should be `v{release-version}-RC{rc-version}`. This has the advantage of avoiding tag deletion.

* release-version: The version you want to release, such as 1.2.0.
* rc-version: The release candidate version, such as RC1.

```shell
$ git tag -a v{release-version}-RC{rc-version} -m "Release Apache Answer {release-version}"
$ git push origin v{release-version}-RC{rc-version}
```

After pushing the RC tag, CI will automatically generate the release page based on the tag. write the release notes in the release page. remember to select `Set as a pre-release` before clicking `Publish release`. 

![release page](/img/community/img-1.jpg)


The release notes should choose a tag that is not the branch, such as `v1.2.0-RC1`.

![release notes](/img/community/img-2.png)



### Sign the release artifacts

Sign the release artifacts with the GPG key. **Be careful to check that the binary file is complete to avoid a size of 0.**

```shell
# sign the release artifacts, xxxx is xxx@apache.org
$ for i in *.tar.gz; do echo $i; gpg --local-user xxxx --armor --output $i.asc --detach-sig $i ; done
```

### Create the checksums for the release artifacts

```shell
# create the checksums
$ for i in *.tar.gz; do echo $i; sha512sum  $i > $i.sha512 ; done
```

### Upload to the svn repository
> **NOTICE** The repository address where the GPG key is created and the prepository address where the release artifacts are uploaded are not the same. The GPG key is uploaded to the `https://dist.apache.org/repos/dist/release/answer/` repository, and the release artifacts are uploaded to the `https://dist.apache.org/repos/dist/dev/answer/` repository.

1. Create a directory for the release artifacts in the svn repository.
   ```shell
   $ svn co https://dist.apache.org/repos/dist/dev/answer/
   ```
2. Upload the release artifacts to the svn repository.
   ```shell
   $ cp /path/to/release/artifacts/* ./{release-version}/
   $ svn add ./{release-version}/*
   ```
3. release-version format: 1.2.0
   ```shell
   $ svn commit -m "add Apache Answer release artifacts for {release-version}"
   ```
The release artifacts should be uploaded to the `https://dist.apache.org/repos/dist/dev/answer/{release-version}` directory.


**IMPORTANT** After completion, visit the link `https://dist.apache.org/repos/dist/dev/answer/{release-version}` to check whether the file upload is correct.

![correct result](/img/community/release.jpeg)


## Verify the release artifacts

Following is the basic check items for the release artifacts.

- [ ] Download links are valid.
- [ ] Checksums and PGP signatures are valid.
- [ ] Source code distributions have correct names matching the current release.
- [ ] LICENSE and NOTICE files are correct for each Apache Answer repo.
- [ ] All files have license headers if necessary.
- [ ] No unlicensed compiled archives bundled in source archive.

### How to verify the signatures

```shell
# download KEYS
$ curl https://downloads.apache.org/answer/KEYS > KEYS

# import KEYS and trust the key, please replace the email address with the one you want to trust.
$ gpg --import KEYS
$ gpg --edit-key linkinstar@apache.org
gpg> trust
gpg> 5
gpg> y
gpg> quit

# enter the directory where the release artifacts are located
$ cd /path/to/release/artifacts

# verify the signature
$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done

# if you see 'Good signature' in the output, it means the signature is valid.
```

### How to verify the checksums

```shell
# verify the checksums
$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done
```

## Start a vote

> Apache Answer has graduated from incubation and only needs to be voted by the community

1. The Apache Answer community votes, send a voting email to `dev@answer.apache.org`. PMC needs to check the correctness of the version according to the document before voting. 
2. After at least 72 hours and counting 3 +1 PMC member votes, you can enter the next stage.
3. Announce the voting result, and send the voting result email to `dev@answer.apache.org`.

### Dev Mailing List Vote Template

```
[VOTE] Release Apache Answer {release-version}

Hello Apache Answer Community,

    This is a call for vote to release Apache Answer version {release-version}.

    The release candidates:
    https://dist.apache.org/repos/dist/dev/answer/{release-version}

    Release notes:
    https://github.com/apache/answer/releases/tag/{release-version}

    Git tag for the release:
    https://github.com/apache/answer/releases/tag/{release-version}

    Git commit id for the release:
    https://github.com/apache/answer/commit/{commit-hash}

    Keys to verify the Release Candidate:
    https://downloads.apache.org/answer/KEYS

    Keys to verify the Release Candidate:
    The artifacts signed with PGP key [{key-id}], corresponding to [{email}], that can be found in keys file:
    https://dist.apache.org/repos/dist/release/answer/KEYS

    The vote will be open for at least 72 hours or until the necessary number of votes are reached.

    Please vote accordingly:

    [ ] +1 approve
    [ ] +0 no opinion
    [ ] -1 disapprove with the reason

    Checklist for reference:

    [ ] Download links are valid.
    [ ] Checksums and PGP signatures are valid.
    [ ] Source code distributions have correct names matching the current release.
    [ ] LICENSE and NOTICE files are correct for each Answer repo.
    [ ] All files have license headers if necessary.
    [ ] No unlicensed compiled archives bundled in source archive.

    To compile from the source, please refer to:

    https://github.com/apache/answer#building-from-source

Thanks,
<YOUR NAME>
```

## Voting Timeout Situation

If the vote has been pending for more than 72 hours without reaching the required number of votes, you can send the following reminder email to dev@answer.apache.org:

```
Dear PMC Members,

Apache Answer version {release-version} has been pending for voting for more
than 72 hours. If any PMC member is available, please help us get the
ballot completed. Currently, we are still missing +1 binding vote to
finalize the process.

https://lists.apache.org/thread/{thread-id}

Best regards,
<YOUR NAME>
```

If there is still no response after the reminder to the dev mailing list, you should send private emails to the project mentors requesting their vote. This helps ensure timely processing of the release vote.

## Migration candidate to the release Apache SVN

Before announcing the vote result, you need to migrate the release artifacts from the dev Apache SVN to the release Apache SVN. The release artifacts should be uploaded to the `https://dist.apache.org/repos/dist/release/answer/{release-version}` directory.

```shell
$ svn mv https://dist.apache.org/repos/dist/dev/answer/{release-version} https://dist.apache.org/repos/dist/release/answer/{release-version} -m "transfer packages for answer {release-version}"
```

## Create a release

After the vote is passed, create a tag without RC, CI will automatically generate the release page based on the tag.

```shell
$ git tag -a v{release-version} -m "Release Apache Answer {release-version}"
$ git push origin v{release-version}
```

## Update the Download page

Update the download page with the new release version. The download page is located in the `src/pages/download.tsx` file.


## Announce the vote result and release.

After the vote is passed, send an email to the an announce@apache.org and cc dev@answer.apache.org to announce the vote result and release.

### email template

```text
Hello everyone,

The Apache Answer {release-version} has been released!

Apache Answer is a Q&A platform software for teams at any scale.
Whether it's a community forum, help center, or knowledge management platform, you can always count on Apache Answer.

Download Links: https://downloads.apache.org/answer/

Release Notes: https://github.com/apache/answer/releases/tag/{release-version}

Website: https://answer.apache.org/

Resources:
- Issue: https://github.com/apache/answer/issues
- Mailing list: dev@answer.apache.org

Thanks,
<YOUR NAME>
```
