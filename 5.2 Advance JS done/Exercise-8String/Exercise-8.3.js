let str1 = "What I'd like to tell on this topic is:"
let str2 = "Hi everyone!"

function truncate(text, maxlength) {
  if (text.length > maxlength) {
    return text.slice(0, maxlength) + "..."
  }
  return text
}

