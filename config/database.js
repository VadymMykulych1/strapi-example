const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: env(
        "DATABASE_FILENAME",
        path.join(__dirname, "..", ".tmp/data.db")
      ),
    },
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 0,
      max: 1,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 300000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 2000,
    },
    useNullAsDefault: true,
  },
});
