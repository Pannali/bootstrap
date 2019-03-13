---
layout: docs
title: Migrating to v5
description: Track and review changes to the Bootstrap source files, documentation, and components to help you migrate from v4 to v5.
group: migration
redirect_from: "/migration/"
toc: true
---

## Browser support
See the browser and devices page for details on what is currently supported in Bootstrap 5. Since v4, here's what's changed to our browser support:

- Dropped support for IE10 and IE11
- Dropped support for Firefox NN - MM
- Dropped support for Safari NN
- Dropped support for iOS Safari NN
- Dropped support for Chrome NN
- Dropped support for Android NN

## Sass
Changes that have happened to our source Sass files.

- **Todo:** Remove previously deprecated mixins (text-hide, retina-img, form-control-mixin)
- **Todo:** New variables?
- **Todo:** Rearrange forms source files (under `scss/forms/`)
- **Todo:** Rearrange grid source files (under `scss/grid/`)

## Grid and layout
Changes to any layout tools and our grid system.

- Dropped `.media` component as it can be built with utility classes
- **Todo:** Remove `position: relative` from grid columns
- **Todo:** Integrate CSS grid into our grid system

## Content
Changes to Reboot, typography, and more.

- **Todo:** Make RFS enabled by default

## Forms

- **Todo:** Move forms documentation to it's own top-level section
- **Todo:** Rearrange source Sass files (under `scss/forms/`)
- **Todo:** Combine native and custom checkboxes and radios
- **Todo:** Rewrite checks to support sizing (via `em`/`font-size` or explicit modifier classes)
- **Todo:** Combine native and custom selects
- **Todo:** Combine native and custom file and range inputs

## Components


## Utilities
- **Todo:** Split utilities into property-value utility classes and helpers

## Build tools
