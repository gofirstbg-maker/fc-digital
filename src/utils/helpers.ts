export function splitTitleAndSubtitle(input: string): { title: string; subtitle: string } {
  const words = input.split(" ");
  if (words.length > 4) {
    return {
      title: words.slice(0, 4).join(" "),
      subtitle: words.slice(4).join(" ")
    };
  }
  return {
    title: input,
    subtitle: ""
  };
}
