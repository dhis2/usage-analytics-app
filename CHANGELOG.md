# [25.1.0](https://github.com/dhis2/usage-analytics-app/compare/v25.0.0...v25.1.0) (2020-10-28)


### Bug Fixes

* **browser-support:** fix IE11 ([087f288](https://github.com/dhis2/usage-analytics-app/commit/087f2889bf893852b15c58d2e442c8de64450295))
* **chart resize:** added on-resize callback to shrink chart quickly ([2a65699](https://github.com/dhis2/usage-analytics-app/commit/2a65699f692ccd8d41a12ab24bf9da65b1d43485))
* **filter reducer:** repaired broken test ([303b467](https://github.com/dhis2/usage-analytics-app/commit/303b467f257cee6a8796bd1033952c2f032ff15c))
* **translations:** sync translations from transifex (master) ([e65a48a](https://github.com/dhis2/usage-analytics-app/commit/e65a48a123f0a4273bf419d41679e65abafb2be3))
* **translations:** sync translations from transifex (master) ([59122fb](https://github.com/dhis2/usage-analytics-app/commit/59122fbdd6e84143ce4bc1ad867381dc8309483c))
* **translations:** sync translations from transifex (master) ([286c78d](https://github.com/dhis2/usage-analytics-app/commit/286c78dc131b385e5f73481553fca86ce5ab3b4f))
* **translations:** sync translations from transifex (master) ([ff72a56](https://github.com/dhis2/usage-analytics-app/commit/ff72a56c5a8fa71a2f8664b097ba89a9352cf6dc))
* **translations:** sync translations from transifex (master) ([77ff6d9](https://github.com/dhis2/usage-analytics-app/commit/77ff6d9403c4798c15e6af8fee064a8572f028e7))
* **translations:** sync translations from transifex (master) ([0fbc28e](https://github.com/dhis2/usage-analytics-app/commit/0fbc28e0dff962de2c642aa2303dc9ebbee35772))
* **translations:** sync translations from transifex (master) ([ea11eb0](https://github.com/dhis2/usage-analytics-app/commit/ea11eb0a2b4d976cc7d8f06252dffce43256fddd))
* body style ([0bee44c](https://github.com/dhis2/usage-analytics-app/commit/0bee44ceed28df7c8469999192552dc94cb5e5ec))
* ensure update-filter gets called with the proper arguments ([#180](https://github.com/dhis2/usage-analytics-app/issues/180)) ([712efe7](https://github.com/dhis2/usage-analytics-app/commit/712efe70cee7c302e5fa93bcd4536b7d927d24b4))
* upgrade @dhis2/cli-app-scripts and switch to @dhis2/ui v5 API ([#371](https://github.com/dhis2/usage-analytics-app/issues/371)) ([63acde2](https://github.com/dhis2/usage-analytics-app/commit/63acde24c7436b1b4b53277be0f2dcf814fc6d37))
* **translations:** sync translations from transifex (master) ([defefba](https://github.com/dhis2/usage-analytics-app/commit/defefba4a8a3f5b7db59fe8abfd1ac319b9f210c))
* **translations:** sync translations from transifex (master) ([eeb6c91](https://github.com/dhis2/usage-analytics-app/commit/eeb6c91ac0637ec6197f00f702a7e7b6c023c2bf))
* ensure we use .. for BASE_URL ([f5be57c](https://github.com/dhis2/usage-analytics-app/commit/f5be57cbacdb5a40675f18603ebb2af0c522de5f))
* update d2.config to fix build and stop using env variables ([#350](https://github.com/dhis2/usage-analytics-app/issues/350)) ([21f55a9](https://github.com/dhis2/usage-analytics-app/commit/21f55a9ac6035ea6ddea6c2b6f26d92a9da6c45d))
* **date-range:** update filter immediately but debounce get usage data ([eb26764](https://github.com/dhis2/usage-analytics-app/commit/eb267643443384ebeb7f7c1c9e32b6d86ed1733b))
* **end-date:** use correct component ([28a7973](https://github.com/dhis2/usage-analytics-app/commit/28a79734dae2dad395838e14abcebbe69d8a6d2e))
* **select:** adjust from string based props to boolean props ([7941d3e](https://github.com/dhis2/usage-analytics-app/commit/7941d3e141a7dd9116c38ee0af58aa342b1471f3))
* **translations:** sync translations from transifex (master) ([dee5f14](https://github.com/dhis2/usage-analytics-app/commit/dee5f14c568b3b782fb3842e67922191428830b0))
* allow hosting app on nested url ([#45](https://github.com/dhis2/usage-analytics-app/issues/45)) ([5a90cb9](https://github.com/dhis2/usage-analytics-app/commit/5a90cb91dbf9ee0584feaa83a74cc50f863be239))
* manifest credentials bug in chrome ([#25](https://github.com/dhis2/usage-analytics-app/issues/25)) ([d1ebdd4](https://github.com/dhis2/usage-analytics-app/commit/d1ebdd47870d7f87b4975c28e889249f9815edd1))
* prevent double scrollbars on linux ([#298](https://github.com/dhis2/usage-analytics-app/issues/298)) ([5c10f6e](https://github.com/dhis2/usage-analytics-app/commit/5c10f6ec6ef135227cdb7d61259db76123590e68))
* render error message on missing date ([#181](https://github.com/dhis2/usage-analytics-app/issues/181)) ([0926dcc](https://github.com/dhis2/usage-analytics-app/commit/0926dcce8f540d46ce63339c2502d349575daa89))
* **package:** update @dhis2/ui-core to version 3.4.0 ([#52](https://github.com/dhis2/usage-analytics-app/issues/52)) ([cde5eff](https://github.com/dhis2/usage-analytics-app/commit/cde5eff0dbf2132c42d44062cb2c2e4f07ddc969))


### Features

* **chart:** dynamic min-value on yAxis ([d1c4a5d](https://github.com/dhis2/usage-analytics-app/commit/d1c4a5d7c3d6e24e7954c8a453760ff1eb49e57f))
* **chart size:** tweaked chart config and css to set a max height ([d7b0390](https://github.com/dhis2/usage-analytics-app/commit/d7b0390f65bb9befaebf1a3c781e224433a0e858))
* **default filter:** using all instead of total ([0e75b3a](https://github.com/dhis2/usage-analytics-app/commit/0e75b3a1926e3f5773f5e0ab365bac1cf6967856))
* data-fetching with filter-bar ([03c1f9e](https://github.com/dhis2/usage-analytics-app/commit/03c1f9eb5b229f0a8d6fba92c367db23e75dadd4))
* date validation ([7be3c9f](https://github.com/dhis2/usage-analytics-app/commit/7be3c9fb0738c409aa91ed9e78d6dea152fbfb0b))
* **config:** add config variables for dropdowns and tables ([7e68f95](https://github.com/dhis2/usage-analytics-app/commit/7e68f9503882bb139d0c359de906d131ab5f2653))
* **error-handling:** throw errors from failed get ([8867a94](https://github.com/dhis2/usage-analytics-app/commit/8867a94e3dbc6e5874b139dc3f625d3817621fa4))
* **it works:** fully functional now ([a51ff88](https://github.com/dhis2/usage-analytics-app/commit/a51ff88f2b6185ddc9fbd9cc87be23f76299e6a0))
* **state:** introducing redux wip ([7aa310f](https://github.com/dhis2/usage-analytics-app/commit/7aa310f78da51cdf832a0bb44e7eef061cd97f73))

# [25.1.0-alpha.1](https://github.com/dhis2/usage-analytics-app/compare/v25.0.0...v25.1.0-alpha.1) (2020-10-19)


### Bug Fixes

* **browser-support:** fix IE11 ([087f288](https://github.com/dhis2/usage-analytics-app/commit/087f2889bf893852b15c58d2e442c8de64450295))
* **chart resize:** added on-resize callback to shrink chart quickly ([2a65699](https://github.com/dhis2/usage-analytics-app/commit/2a65699f692ccd8d41a12ab24bf9da65b1d43485))
* **filter reducer:** repaired broken test ([303b467](https://github.com/dhis2/usage-analytics-app/commit/303b467f257cee6a8796bd1033952c2f032ff15c))
* **package:** update @dhis2/ui-core to version 3.4.0 ([#52](https://github.com/dhis2/usage-analytics-app/issues/52)) ([cde5eff](https://github.com/dhis2/usage-analytics-app/commit/cde5eff0dbf2132c42d44062cb2c2e4f07ddc969))
* **select:** adjust from string based props to boolean props ([7941d3e](https://github.com/dhis2/usage-analytics-app/commit/7941d3e141a7dd9116c38ee0af58aa342b1471f3))
* **translations:** sync translations from transifex (master) ([286c78d](https://github.com/dhis2/usage-analytics-app/commit/286c78dc131b385e5f73481553fca86ce5ab3b4f))
* **translations:** sync translations from transifex (master) ([ff72a56](https://github.com/dhis2/usage-analytics-app/commit/ff72a56c5a8fa71a2f8664b097ba89a9352cf6dc))
* **translations:** sync translations from transifex (master) ([77ff6d9](https://github.com/dhis2/usage-analytics-app/commit/77ff6d9403c4798c15e6af8fee064a8572f028e7))
* **translations:** sync translations from transifex (master) ([0fbc28e](https://github.com/dhis2/usage-analytics-app/commit/0fbc28e0dff962de2c642aa2303dc9ebbee35772))
* **translations:** sync translations from transifex (master) ([ea11eb0](https://github.com/dhis2/usage-analytics-app/commit/ea11eb0a2b4d976cc7d8f06252dffce43256fddd))
* body style ([0bee44c](https://github.com/dhis2/usage-analytics-app/commit/0bee44ceed28df7c8469999192552dc94cb5e5ec))
* upgrade @dhis2/cli-app-scripts and switch to @dhis2/ui v5 API ([#371](https://github.com/dhis2/usage-analytics-app/issues/371)) ([63acde2](https://github.com/dhis2/usage-analytics-app/commit/63acde24c7436b1b4b53277be0f2dcf814fc6d37))
* **translations:** sync translations from transifex (master) ([defefba](https://github.com/dhis2/usage-analytics-app/commit/defefba4a8a3f5b7db59fe8abfd1ac319b9f210c))
* **translations:** sync translations from transifex (master) ([eeb6c91](https://github.com/dhis2/usage-analytics-app/commit/eeb6c91ac0637ec6197f00f702a7e7b6c023c2bf))
* allow hosting app on nested url ([#45](https://github.com/dhis2/usage-analytics-app/issues/45)) ([5a90cb9](https://github.com/dhis2/usage-analytics-app/commit/5a90cb91dbf9ee0584feaa83a74cc50f863be239))
* update d2.config to fix build and stop using env variables ([#350](https://github.com/dhis2/usage-analytics-app/issues/350)) ([21f55a9](https://github.com/dhis2/usage-analytics-app/commit/21f55a9ac6035ea6ddea6c2b6f26d92a9da6c45d))
* **translations:** sync translations from transifex (master) ([dee5f14](https://github.com/dhis2/usage-analytics-app/commit/dee5f14c568b3b782fb3842e67922191428830b0))
* ensure update-filter gets called with the proper arguments ([#180](https://github.com/dhis2/usage-analytics-app/issues/180)) ([712efe7](https://github.com/dhis2/usage-analytics-app/commit/712efe70cee7c302e5fa93bcd4536b7d927d24b4))
* ensure we use .. for BASE_URL ([f5be57c](https://github.com/dhis2/usage-analytics-app/commit/f5be57cbacdb5a40675f18603ebb2af0c522de5f))
* manifest credentials bug in chrome ([#25](https://github.com/dhis2/usage-analytics-app/issues/25)) ([d1ebdd4](https://github.com/dhis2/usage-analytics-app/commit/d1ebdd47870d7f87b4975c28e889249f9815edd1))
* prevent double scrollbars on linux ([#298](https://github.com/dhis2/usage-analytics-app/issues/298)) ([5c10f6e](https://github.com/dhis2/usage-analytics-app/commit/5c10f6ec6ef135227cdb7d61259db76123590e68))
* render error message on missing date ([#181](https://github.com/dhis2/usage-analytics-app/issues/181)) ([0926dcc](https://github.com/dhis2/usage-analytics-app/commit/0926dcce8f540d46ce63339c2502d349575daa89))
* **date-range:** update filter immediately but debounce get usage data ([eb26764](https://github.com/dhis2/usage-analytics-app/commit/eb267643443384ebeb7f7c1c9e32b6d86ed1733b))
* **end-date:** use correct component ([28a7973](https://github.com/dhis2/usage-analytics-app/commit/28a79734dae2dad395838e14abcebbe69d8a6d2e))


### Features

* **chart:** dynamic min-value on yAxis ([d1c4a5d](https://github.com/dhis2/usage-analytics-app/commit/d1c4a5d7c3d6e24e7954c8a453760ff1eb49e57f))
* **chart size:** tweaked chart config and css to set a max height ([d7b0390](https://github.com/dhis2/usage-analytics-app/commit/d7b0390f65bb9befaebf1a3c781e224433a0e858))
* **default filter:** using all instead of total ([0e75b3a](https://github.com/dhis2/usage-analytics-app/commit/0e75b3a1926e3f5773f5e0ab365bac1cf6967856))
* data-fetching with filter-bar ([03c1f9e](https://github.com/dhis2/usage-analytics-app/commit/03c1f9eb5b229f0a8d6fba92c367db23e75dadd4))
* date validation ([7be3c9f](https://github.com/dhis2/usage-analytics-app/commit/7be3c9fb0738c409aa91ed9e78d6dea152fbfb0b))
* **config:** add config variables for dropdowns and tables ([7e68f95](https://github.com/dhis2/usage-analytics-app/commit/7e68f9503882bb139d0c359de906d131ab5f2653))
* **error-handling:** throw errors from failed get ([8867a94](https://github.com/dhis2/usage-analytics-app/commit/8867a94e3dbc6e5874b139dc3f625d3817621fa4))
* **it works:** fully functional now ([a51ff88](https://github.com/dhis2/usage-analytics-app/commit/a51ff88f2b6185ddc9fbd9cc87be23f76299e6a0))
* **state:** introducing redux wip ([7aa310f](https://github.com/dhis2/usage-analytics-app/commit/7aa310f78da51cdf832a0bb44e7eef061cd97f73))
