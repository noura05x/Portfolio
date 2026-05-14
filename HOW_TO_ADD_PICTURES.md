# How to add or replace pictures

## Profile picture
Put your profile picture here:

```text
public/images/profile.png
```

Use the same file name `profile.png`. If your image is JPG, either rename it to `profile.png` after exporting as PNG, or update the path in `app/page.tsx`.

## Certificate pictures
Put certificate images here:

```text
public/images/certificates/
```

Then open `app/page.tsx` and edit the `certificates` array. Example:

```tsx
{
  title: "Bootcamp for AI Professionals",
  provider: "SDAIA",
  date: "Dec 2025 – Feb 2026",
  image: "/images/certificates/ai-pro.jpeg",
}
```

## Award pictures
Put award images here:

```text
public/images/awards/
```

Current placeholders are:

```text
public/images/awards/haqthon.png
public/images/awards/excellence.png
```

Replace those files with your real award images using the same names, or edit the `awards` array in `app/page.tsx`.

## Project pictures
Put project images here:

```text
public/images/projects/
```

Then edit the `projects` array in `app/page.tsx`.
