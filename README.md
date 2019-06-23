# ffmpeg-manager

Module to control FFMPEG actions (TRIM, CLIPS, CONCAT, MERGE)

## Requirements

Install ffmpeg

```bash
sudo apt-get install ffmpeg
```

Or

```bash
brew install ffmpeg
```

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

| Name       | Route                 | Type Request | Params                   | Description                  |
| ---------- | --------------------- | ------------ | ------------------------ | ---------------------------- |
| `Merge`    | `/movie-maker/merge`  | `POST`       | listFiles                | Merge videos .               |
| `Trim`     | `/movie-maker/trim`   | `POST`       | not yet                  | Cut video into parts.        |
| `Clip`     | `/movie-maker/clip`   | `POST`       | path, extension, times   | Add video parts into output. |
| `Concat`   | `/movie-maker/concat` | `POST`       | not yet                  | Join videos.                 |
| `Upload`   | `/video/upload`       | `POST`       | Bucket, Key              | Upload video into s3.        |
| `Download` | `/video/download`     | `POST`       | Bucket, Key, ContentType | Download video from s3.      |

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

### Sequence Diagram

<div align="center">
  <a href="https://github.com/HackSpacePeru/ffmpeg-manager/blob/master/ffmpeg_manager-sequence_diagram.png">
    <img src="https://github.com/HackSpacePeru/ffmpeg-manager/blob/master/ffmpeg_manager-sequence_diagram.png" alt="FFMPEG Manager Sequence Diagram" width="400"/>
    </a>
</div>

### Result Video

![]("https://github.com/HackSpacePeru/ffmpeg-manager/blob/master/mergedVideo.gif")
