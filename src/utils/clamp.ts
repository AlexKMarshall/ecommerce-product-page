export function clamp(
  value: number,
  { min, max }: { min?: number; max?: number } = {}
): number {
  let clampedValue = value
  if (min !== undefined && value < min) {
    clampedValue = min
  }
  if (max !== undefined && value > max) {
    clampedValue = max
  }
  return clampedValue
}
