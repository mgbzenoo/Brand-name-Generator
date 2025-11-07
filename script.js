function generateName() {
  const keyword = document.getElementById("keyword").value.trim();
  const tone = document.getElementById("tone").value;
  const result = document.getElementById("result");

  if (!keyword) {
    result.textContent = "Please enter a keyword.";
    return;
  }

  const funSuffixes = ["ify", "ster", "orama", "topia", "zilla"];
  const luxurySuffixes = ["& Co.", " Luxe", " Elite", " Haus", " Atelier"];
  const seriousSuffixes = ["Tech", "Solutions", "Systems", "Works", "Group"];

  let suffixes;
  if (tone === "fun") suffixes = funSuffixes;
  else if (tone === "luxury") suffixes = luxurySuffixes;
  else suffixes = seriousSuffixes;

  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const brandName = keyword.charAt(0).toUpperCase() + keyword.slice(1) + randomSuffix;

  result.textContent = `Your brand name: ${brandName}`;
}
