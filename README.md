# ffmpeg-manager

Module to control FFMPEG actions (TRIM, CLIPS, CONCAT, MERGE)

## Install

```bash
npm install
```

Or

```bash
yarn install
```

## Usage

```jsx
import React, { Component } from 'react'

import SeatPicker from 'react-seat-picker'

class Example extends Component {
}
```

### Functions

Name | Type | Description
---- | ----- | -----------
`ffmpeg` | function | Execute ffmpeg command line application to transform videos.
`ffprobe` | function | Verify file in case is corrupted.

### Functions2

Name | Route | Type Request | Params | Description
---- |---- | ----- | ----- | ------
`Merge` | `/movie-maker/merge` |`POST` |  | Merge videos .
`Trim` | `/movie-maker/trim` |`POST` |  | Cut video into parts.
`Clip` | `/movie-maker/clip` |`POST` |  | Add video parts into output.
`Concat` | `/movie-maker/concat` |`POST` |  | Join videos.
`Upload` | `/Video/upload` | `POST` | | Upload video into s3.

### Function Arguments

#### Merge

Names | Type | Description
---- | ----- | -----
`no` |`string` | Merge videos .

#### Trim

Names | Type | Description
---- | ----- | -----
`no` |`string` | Merge videos .

#### Clip

Names | Type | Description
---- | ----- | -----
`no` |`string` | Merge videos .

#### Concat

Names | Type | Description
---- | ----- | -----
`no` |`string` | Merge videos .
