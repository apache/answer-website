---
date: 2025-06-03
title: "Apache Answer 1.5.1: Now Available with Improvements and Fixes"
authors: [LinkinStar]
category: Release
featured: true
image: 2025-06-03-cover@4x.png
description: "Answer 1.5.1 Enhanced Navigation, Admin Menu Improvements & Key Bug Fixes"
---

# Version 1.5.1 Release Notes

We're excited to announce the release of version **1.5.1**! This update brings several improvements and bug fixes to enhance usability and stability. Below are the key changes in this release.

---

## 🔧 Improvements

- **Separate Background Color for Navigation**  
  The navigation bar now has a distinct background color for better visual separation and improved user experience. *(Thanks @shuashuai & @LinkinStars [#1346](https://github.com/apache/answer/pull/1346))*

- **Enhanced Admin Menu**  
  The admin menu has been refined for better organization and usability. *(Thanks @shuashuai [#1345](https://github.com/apache/answer/pull/1345))*

- **Refined Command Usage Statements**  
  Command-line tool usage descriptions have been improved for clarity. *(Thanks @Octobug [#1330](https://github.com/apache/answer/pull/1330))*

- **Comprehensive Tests for KV Storage Plugin**  
  Added thorough testing for the key-value storage plugin to ensure reliability. *(Thanks @sosyz [#1344](https://github.com/apache/answer/pull/1344))*

---

## 🐞 Bug Fixes

- **Google Login Users Losing Image Access**  
  Fixed an issue where users logging in via Google connector couldn't access images. *(Thanks @Giorgio-Bonvicini-R4P [#1334](https://github.com/apache/answer/pull/1334))*

- **Username Minimum Length Inconsistency**  
  Resolved a mismatch where the admin panel still enforced a 4-character minimum despite the setting being reduced to 2. *(Thanks @sy-records [#1341](https://github.com/apache/answer/pull/1341))*

- **Code Snippet Layout Breakage**  
  Fixed a bug where code snippets could disrupt the page layout. *(Thanks @shuashuai [#1329](https://github.com/apache/answer/pull/1329))*

- **Image Placement When Copying Mixed Content**  
  Corrected an issue where pasted images would always appear at the end of copied text-and-image content. *(Thanks @shuashuai)*

---

## ❤️ Thanks to Our Contributors

A huge thank you to all the contributors who helped improve this release (sorted by GitHub ID):  
[@Giorgio-Bonvicini-R4P](https://github.com/Giorgio-Bonvicini-R4P), [@LinkinStars](https://github.com/LinkinStars), [@Octobug](https://github.com/Octobug), [@shuashuai](https://github.com/shuashuai), [@sosyz](https://github.com/sosyz), [@sy-records](https://github.com/sy-records)

Your contributions make this project better with every update! 🚀

---

**Upgrade now** to enjoy these improvements and fixes! If you encounter any issues, please report them on [GitHub](https://github.com/apache/answer/issues).

Happy browsing! 🎉
