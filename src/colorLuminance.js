// calcula a luminescencia relativa de uma cor em formato hexadecimal ex.: colorLuminance("#ffffff") retorna 1
// e colorLuminance("#000000") retorna 0
export default function colorLuminance(hex_color_string) {

    // determina valores rgb a partir da string em hexadecimal
    let color_int = parseInt( hex_color_string.slice(1,7) , 16)
    
    let rgb = []
    rgb[0] = (color_int >> 16 ) & 255;  // red
    rgb[1] = (color_int >> 8) & 255;    // green
    rgb[2] = color_int & 255;           // blue

    // calcula a luminância relativa da cor conforme https://www.w3.org/WAI/GL/wiki/Relative_luminance
    for(let i = 0 ; i < 3 ; i++)
    {
        rgb[i] = rgb[i]/255.0
        if (rgb[i] <= 0.03928 ){
            rgb[i] = rgb[i]/12.92 
        } else {
            rgb[i] = ((rgb[i]+0.055)/1.055) ** 2.4
        }
    }
    let luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]

    return luminance;
}