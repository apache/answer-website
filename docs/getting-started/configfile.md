---
slug: /configfile
---

# Config File

:::tip

Apache Answer uses a YAML configuration file, `config.yaml`. It is created automatically by the `answer init` command, in the `conf` directory of your data directory.

- With Docker, the data directory is `/data`, so the file is `/data/conf/config.yaml`.
- With the binary, the data directory is the one you pass with `-C`. For example, `./answer init -C ./answer-data/` creates `./answer-data/conf/config.yaml`.

Restart Answer after changing this file.

:::

## Example config.yaml

This is the default configuration created by `answer init`, with an SQLite database. Optional settings that are not set by default are commented out.

```yaml title="/data/conf/config.yaml"
# debug: false
server:
  http:
    addr: 0.0.0.0:80
data:
  database:
    driver: "sqlite3"
    connection: "/data/sqlite3/answer.db"
    # max_open_conn: 0
    # max_idle_conn: 0
    # conn_max_life_time: 0
  cache:
    file_path: "/data/cache/cache.db"
i18n:
  bundle_dir: "/data/i18n"
swaggerui:
  show: true
  protocol: http
  host: 127.0.0.1
  address: ':80'
service_config:
  upload_path: "/data/uploads"
  clean_up_uploads: true
  clean_orphan_uploads_period_hours: 48
  purge_deleted_files_period_days: 30
ui:
  public_url: '/'
  api_url: '/'
  base_url: ''
  api_base_url: ''
```

## Settings

### debug

Run in debug mode, with more verbose logging. Default: `false`. Leave this off in production.

### server

| Setting | Default | Description |
|---|---|---|
| `server.http.addr` | `0.0.0.0:80` | The address and port Answer listens on. This is not set by `INSTALL_PORT`, which only applies to the installer. On Linux, ports below 1024 require root, so use a higher port (such as `0.0.0.0:9080`) if you run Answer as a regular user. Can be overridden with the `SITE_ADDR` environment variable. |

### data

| Setting | Default | Description |
|---|---|---|
| `data.database.driver` | `sqlite3` | The database type: `sqlite3`, `mysql`, or `postgres`. |
| `data.database.connection` | `/data/sqlite3/answer.db` | For SQLite, the path to the database file. For MySQL or PostgreSQL, the connection string, for example `user:password@tcp(127.0.0.1:3306)/answer` for MySQL. |
| `data.database.max_open_conn` | not set | Maximum number of open database connections. Not set means no limit. Ignored for SQLite, which always uses a single connection. |
| `data.database.max_idle_conn` | not set | Maximum number of idle connections kept in the pool. Not set means the driver default. |
| `data.database.conn_max_life_time` | not set | Maximum time, in seconds, that a connection may be reused. Not set means no limit. |
| `data.cache.file_path` | `/data/cache/cache.db` | Where the cache file is stored. |

The database settings are written by the installer, based on the choices you make during [installation](/docs/installation).

### i18n

| Setting | Default | Description |
|---|---|---|
| `i18n.bundle_dir` | `/data/i18n` | The directory containing the translation files. |

### swaggerui

These settings control the API documentation page at `/swagger/index.html`. See [API Document](/docs/api) for more.

| Setting | Default | Description |
|---|---|---|
| `swaggerui.show` | `true` | Whether to serve the API documentation page. |
| `swaggerui.protocol` | `http` | The protocol (`http` or `https`) used in the API documentation's links. |
| `swaggerui.host` | `127.0.0.1` | The host name or IP address used in the API documentation's links. Can be overridden with the `SWAGGER_HOST` environment variable. |
| `swaggerui.address` | `:80` | The port used in the API documentation's links. Can be overridden with the `SWAGGER_ADDRESS_PORT` environment variable. |

The `protocol`, `host`, and `address` settings only affect the links shown in the API documentation, not where Answer listens. Set them to the address people use to reach your site.

### service_config

| Setting | Default | Description |
|---|---|---|
| `service_config.upload_path` | `/data/uploads` | The directory where uploaded files, such as images and avatars, are stored. |
| `service_config.clean_up_uploads` | `true` | Whether to automatically clean up uploaded files that are no longer used. When `false`, the two settings below have no effect. |
| `service_config.clean_orphan_uploads_period_hours` | `48` | How often, in hours, to look for uploaded files that are not used by any post. These files are moved to a `deleted` folder inside `upload_path`, not removed straight away. |
| `service_config.purge_deleted_files_period_days` | `30` | How often, in days, to permanently empty the `deleted` folder inside `upload_path`. This is a schedule, not a retention period: everything in the folder is removed each time it runs, so a file may be removed soon after it was moved there. |

### ui

The `public_url`, `api_url`, and `base_url` settings are used when building the frontend, and are written into the frontend at build time. Changing them in a running installation has no effect unless you rebuild Answer. They generally don't need to be changed, unless you use a CDN or deploy Answer in a subdirectory. See [Deploy subdirectory](/docs/deploy-subdirectory).

| Setting | Default | Description |
|---|---|---|
| `ui.public_url` | `'/'` | The path or URL for static resources. Set this to your CDN's URL if you host static files on a CDN. |
| `ui.api_url` | `'/'` | The base URL the frontend uses for its API requests. Change this only if Answer's API is served from a different address than the site. |
| `ui.base_url` | `''` | The subdirectory path when Answer is deployed in a subdirectory, for example `/community`. Empty means the root directory. |
| `ui.api_base_url` | `''` | A path prefix added to all of Answer's API routes on the server. Empty means no prefix. |

## Environment variable overrides

These environment variables override settings in `config.yaml` at runtime:

| Variable | Overrides |
|---|---|
| `SITE_ADDR` | `server.http.addr` |
| `SWAGGER_HOST` | `swaggerui.host` |
| `SWAGGER_ADDRESS_PORT` | `swaggerui.address` |

For example, to run Answer on port 9080 without editing the file:

```bash
SITE_ADDR=0.0.0.0:9080 ./answer run -C ./answer-data/
```

See [Environment Variables](/docs/env) for the variables used during installation.
