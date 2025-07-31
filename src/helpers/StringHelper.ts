// Tạo chuỗi ngâcu nhiên
export function generateRandomString(length = 100) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

// Viết hoa chữ cái đầu tiên
export function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Cắt chuỗi và thêm dấu ... nếu vượt quá độ dài cho phép
export function truncateString(str, maxLength) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

// Biến chuỗi thành định dạng "slug" (URL-friendly)
export function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Che một phần chuỗi bằng ký tự *
export function maskString(str, visibleStart = 2, visibleEnd = 2) {
  if (str.length <= visibleStart + visibleEnd) return '*'.repeat(str.length);
  const maskedLength = str.length - visibleStart - visibleEnd;
  return (
    str.slice(0, visibleStart) +
    '*'.repeat(maskedLength) +
    str.slice(str.length - visibleEnd)
  );
}
