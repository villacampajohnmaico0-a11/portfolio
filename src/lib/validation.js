import { site } from '../data/site'

export const projectTypeOptions = site.projectTypeOptions
export const budgetOptions = site.budgetOptions

export function validateInquiry(values) {
  const errors = {}

  if (!values.fullName || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.'
  }

  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.projectType) {
    errors.projectType = 'Please choose the type of project you need.'
  }

  if (!values.budget) {
    errors.budget = 'Please choose your estimated budget range.'
  }

  if (!values.description || values.description.trim().length < 20) {
    errors.description = 'Please share a few details about your project.'
  }

  if (!values.preferredContact) {
    errors.preferredContact = 'Please choose how you would prefer to be contacted.'
  }

  return errors
}
