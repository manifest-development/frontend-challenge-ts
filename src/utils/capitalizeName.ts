const capitalizeName = (name: string) => {
  const isFullName = name.includes(" ");

  if (isFullName) {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  // First Name Only
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export default capitalizeName;
