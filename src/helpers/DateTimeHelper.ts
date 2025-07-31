export function formatTime(datetime: string) {
  const date = new Date(datetime)
  return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
}

function formatDate(datetime: string) {
  const date = new Date(datetime)
  return date.toLocaleDateString('vi-VN')
}

export function formatDateTime(datetime: string) {
  return `${formatDate(datetime)} ${formatTime(datetime)}`
}

export function formatDateTimeWithDay(datetime: string) {
  const date = new Date(datetime)

  const today = new Date()

  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  const dateStr = date.toLocaleDateString('vi-VN')
  const todayStr = today.toLocaleDateString('vi-VN')
  const yesterdayStr = yesterday.toLocaleDateString('vi-VN')

  if (dateStr === todayStr) return 'Hôm nay, ' + todayStr
  if (dateStr === yesterdayStr) return 'Hôm qua, ' + yesterdayStr

  return dateStr
}
