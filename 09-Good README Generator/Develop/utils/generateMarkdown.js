// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Descrption
${data.Description}
`;
}

module.exports = generateMarkdown;
