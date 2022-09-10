/**
 * This custom format creates an extension of the SwiftUI Color
 * class and adds all the color tokens as static variables so that
 * you can reference a color token like: `Color.backgroundPrimary`. 
 * It will handle dark mode by using the colorsets and references.
 * 
 * @example
 * ```swift
 * Text("Hello, World!")
 *   .backgroundColor(Color.backgroundPrimary)
 *   .foregroundColor(Color.fontPrimary)
 * ```
 */
module.exports = function({ dictionary, options }) {
  return `import SwiftUI

public enum CompoundColors {\n` +
  dictionary.allProperties.map(token => {
    return `    public static let ${token.name} = ${token.value}`
  }).join(`\n`) + `
    
    /// All of the colors from Compound in a dictionary that can be iterated through.
    public static var allColors: [String: Color] {
        [\n` +
  dictionary.allProperties.map(token => {
    return `            "${token.name}": ${token.name},`
  }).join(`\n`) + `
        ]
    }
}`
}