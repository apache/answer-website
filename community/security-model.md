---
slug: /security-model
---

# Security Model

This document outlines the security model of Apache Answer. It aims to help users understand the security model and make informed decisions about deploying and managing Apache Answer securely.

If you think you have found behavior in Apache Answer that does not follow this security model, please [report it](/community/security) to us privately.

## Admin Permission Security

**Admin users have full system permissions**, which includes access to potentially vulnerable operations. While we assume administrators won't attack their own websites, it's crucial to exercise caution when assigning admin privileges.

So, if a security issue comes up in the administrator page, this is usually not considered a problem. Because the administrator has the authority to do so. Unless a normal user can overstep his authority to operate outside of his capabilities.

## Direct Database Modification

Apache Answer's security model assumes the application and its database are operating within their intended trust boundary. Reports that require direct modification of database records to demonstrate impact are generally out of scope and are not treated as security vulnerabilities by themselves.

If an issue can only be reproduced after manually changing data in the database, that does not show an application-layer security boundary bypass. Otherwise, many normal code paths that render or process stored data would be reclassified as security issues simply because an attacker with database write access can place arbitrary content there.

A report may still be relevant if the same result can be reached through a supported Apache Answer interface, or through another vulnerability, without already having equivalent database-level control.

## Captcha Security

CAPTCHA is an essential security measure to prevent automated attacks and abuse. Apache Answer will not be responsible for security issues arising from disabled CAPTCHA protection. For example, if the user disables the CAPTCHA, it may allow an attacker to crack the user's password by brute force.

![captcha](/img/community/captcha.png)

## Custom Plugin Security

Apache Answer only guarantees the security of official plugins distributed through our [official repository](https://github.com/apache/answer-plugins). We take no responsibility for security issues arising from third-party plugins.

:::caution

If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the [security policy](https://github.com/apache/answer/security/policy) to report it privately. We will fix it as soon as possible.

:::
