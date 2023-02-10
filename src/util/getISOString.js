// Code references Yagisanatod -Scott- offset to seconds conversion + general understanding

export default function getISOStringToday() {
  const date = new Date();
  const offset = date.getTimezoneOffset();

  const offsetToSeconds = offset * 60 * 1000;
  const today = new Date(date - offsetToSeconds);

  return today.toISOString();
}
