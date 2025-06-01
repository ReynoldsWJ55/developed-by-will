export default function EmailObfuscation() {
  const obfuscatedEmail = () => {
    const user = "lliw"; // Reverse of "will"
    const domain = "moc.lliwdepoleved"; // Reverse of "developedbywill.com"
    return `${user}@${domain}`;
  };

  const decodeEmail = () => {
    return obfuscatedEmail().split("").reverse().join("");
  };

  return (
    <a
      href={`mailto:${decodeEmail()}`}
      className="hover:text-blue-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {decodeEmail()}
    </a>
  );
}
