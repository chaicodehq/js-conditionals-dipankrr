/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */

  export function checkPasswordStrength(password) {

    if (typeof password !== 'string' || password.length == 0) {
      return 'weak'
    }

    let score =  0;

    if ( password.length >= 8 ) { score++ }
    if ( /[A-Z]/.test(password) ) { score++ }
    if ( /[a-z]/.test(password) ) { score++ }
    if ( /[0-9]/.test(password) ) { score++ }
    if ( /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password) ) { score++ }

    if (score === 5) return 'very strong'
    if (score === 4) return 'strong'
    if (score >= 2) return 'medium'
    return 'weak'

  }


// export function checkPasswordStrength(password) {

//   if (typeof password !== 'string' || password.length == 0 ) {
//     return 'weak'
//   }

//   const c1 = password.length >= 8
//   const c2 = /[A-Z]/.test(password)
//   const c3 = /[a-z]/.test(password)
//   const c4 = /[0-9]/.test(password)
//   const c5 = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)

//   const cs = [c1, c2, c3, c4, c5]

//   const trueCount = cs.filter(Boolean).length


//   if (trueCount >= 5) {
//     return 'very strong'
//   } else if (trueCount == 4) {
//     return 'strong'
//   } else if (trueCount >= 2) {
//     return 'medium'
//   } else {
//     return 'weak'
//   }


// }
