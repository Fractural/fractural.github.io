export function spaceText(text: string, spacing: number) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += text.charAt(i) + "\xa0".repeat(spacing);
  }
  return result;
}

export function fromURL(url: string) {
  return new URL(url, import.meta.url).href;
}
