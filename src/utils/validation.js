export function validateEmail(email) {
  if (!email) return '이메일을 입력해주세요'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return '이메일 형식이 아닙니다'
  }
  return ''
}

export function validatePassword(password) {
  if (!password) return '비밀번호를 입력해주세요'
  if (password.length < 6) return '6자 이상 입력해주세요'
  return ''
}