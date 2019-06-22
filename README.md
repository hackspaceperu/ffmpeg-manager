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

### Principal Functions

| Name      | Type     | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| `ffmpeg`  | function | Execute ffmpeg command line application to transform videos. |
| `ffprobe` | function | Verify file in case is corrupted.                            |

### Functions

| Name       | Route                 | Type Request | Params    | Description                  |
| ---------- | --------------------- | ------------ | --------- | ---------------------------- |
| `Merge`    | `/movie-maker/merge`  | `POST`       | listFiles | Merge videos .               |
| `Trim`     | `/movie-maker/trim`   | `POST`       | not yet   | Cut video into parts.        |
| `Clip`     | `/movie-maker/clip`   | `POST`       | not yet   | Add video parts into output. |
| `Concat`   | `/movie-maker/concat` | `POST`       | not yet   | Join videos.                 |
| `Upload`   | `/video/upload`       | `POST`       | not yet   | Upload video into s3.        |
| `Download` | `/video/download`     | `POST`       | not yet   | Download video from s3.      |

### Function Arguments

#### Merge

| Names       | Type              | Description           |
| ----------- | ----------------- | --------------------- |
| `listFiles` | `Array of string` | List of video paths . |

#### Trim

| Names     | Type     | Description    |
| --------- | -------- | -------------- |
| `not yet` | `string` | Merge videos . |

#### Clip

| Names     | Type     | Description    |
| --------- | -------- | -------------- |
| `not yet` | `string` | Merge videos . |

#### Concat

| Names     | Type     | Description    |
| --------- | -------- | -------------- |
| `not yet` | `string` | Merge videos . |
