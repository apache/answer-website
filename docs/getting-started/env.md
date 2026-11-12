---
slug: /env
---

# Environment Variables

## Installation

- `INSTALL_PORT`: port for the installation service. The default is `80`.
- `AUTO_INSTALL`: set to `true` to install from environment variables. Unset it to disable auto-install.

### For auto install

When using auto-install, provide all of the following variables:

| Variable | Accepted value |
| --- | --- |
| `DB_TYPE` | `sqlite3`, `mysql`, or `postgres`. |
| `LANGUAGE` | Site language code, such as `en_US`. Up to 30 characters. |
| `SITE_NAME` | Site name, up to 30 characters. |
| `SITE_URL` | Valid URL, up to 512 characters. |
| `CONTACT_EMAIL` | Valid email address, up to 500 characters. |
| `ADMIN_NAME` | Admin name, 2–30 characters. Use letters (`A–Z`, `a–z`), digits, underscores, periods, hyphens, or spaces. |
| `ADMIN_PASSWORD` | Admin password, 8–32 characters. |
| `ADMIN_EMAIL` | Valid email address, up to 500 characters. |
| `EXTERNAL_CONTENT_DISPLAY` | `always_display` or `ask_before_display`. Controls whether embedded external content loads automatically. |

Set the connection variables for the selected database:

| Database | Connection variables |
| --- | --- |
| SQLite (`sqlite3`) | Set `DB_FILE` to the database file path. |
| MySQL (`mysql`) or PostgreSQL (`postgres`) | Set `DB_HOST` (for example, `127.0.0.1:3306` for MySQL or `127.0.0.1:5432` for PostgreSQL), `DB_NAME`, and the credentials `DB_USERNAME` and `DB_PASSWORD` as required by your database. |

#### SQLite example

From the directory containing the `answer` binary, run the following command to initialize a fresh data directory. Replace the example password and email addresses for your own installation.

```bash
INSTALL_PORT=9080 AUTO_INSTALL=true \
  DB_TYPE=sqlite3 DB_FILE=./answer-data/answer.db \
  LANGUAGE=en_US SITE_NAME="My Answer" SITE_URL=http://localhost:9080 \
  CONTACT_EMAIL=admin@example.com \
  ADMIN_NAME=admin ADMIN_PASSWORD='example-password-123' ADMIN_EMAIL=admin@example.com \
  EXTERNAL_CONTENT_DISPLAY=always_display \
  ./answer init -C ./answer-data
```

### For overriding the config file

- `SWAGGER_HOST` - address for the swagger to display, like `192.168.12.12` or `answer.apache.org`
- `SWAGGER_ADDRESS_PORT` - port for the swagger to display, like `:3000`
- `SITE_ADDR` - address that the site should run, like `0.0.0.0:3000`

## Log

- `LOG_LEVEL`: log level support [`DEBUG`  `INFO`  `WARN`  `ERROR`]
- `LOG_PATH`: log storage location


