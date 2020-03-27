# Usage Analytics App

[![Build
Status](https://travis-ci.com/dhis2/usage-analytics-app.svg)](https://travis-ci.com/dhis2/usage-analytics-app)
[![FOSSA
Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdhis2%2Fdhis2-usage-analytics.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdhis2%2Fdhis2-usage-analytics?ref=badge_shield)

This repo contains the usage analytics app. Which was rewritten from
scratch and introduced in DHIS2 version 2.32. It uses the DHIS2 App
Platform.

## Developer guide

### Prerequisites

To use the usage-analytics-app in development mode, it is necessary to
have a running DHIS2 instance, and be logged in to it. Most developers
use their local DHIS2 instance.

### Deploy

#### Local deployment

In order to test the build of the usage-analytics-app (rather than just
the dev server), deploy it to your local dhis2 build. The instructions
here assume a good understanding of building DHIS2 locally.

From the root of the usage-analytics-app, build the usage-analytics-app
locally

`yarn build`

Then run the command below to install the built project to the
`/repository/org/hisp/dhis/dhis-app-usage-analytics` folder of your .m2
directory:

`mvn install`

Navigate to your local dhis2 repo, `/dhis-2/dhis-web` directory. Then
run the command below to build a `dhis.war` file under
`dhis-web/dhis-web-portal/target`

`mvn clean install -o`

Finally, paste the built `dhis.war` file into your Tomcat `/webapps`
directory

#### Deploy to production

Every commit to master and version branches (i.e. v30, v31, etc.) is
automatically deployed.

## License

[![FOSSA
Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdhis2%2Fdhis2-usage-analytics.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdhis2%2Fdhis2-usage-analytics?ref=badge_large)
