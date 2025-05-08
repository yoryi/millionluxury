class ColorPalette {
    private primary: string;
    private secondary: string;
    private background: string;
    private textPrimary: string;
    private textSecondary: string;

    constructor() {
        this.primary = "#3498db";
        this.secondary = "#2ecc71";
        this.background = "#ecf0f1";
        this.textPrimary = "#2c3e50";
        this.textSecondary = "#7f8c8d";
    }

    get Primary(): string {
        return this.primary;
    }

    get Secondary(): string {
        return this.secondary;
    }

    get Background(): string {
        return this.background;
    }

    get TextPrimary(): string {
        return this.textPrimary;
    }

    get TextSecondary(): string {
        return this.textSecondary;
    }

    setPrimary(color: string) {
        this.primary = color;
    }

    setSecondary(color: string) {
        this.secondary = color;
    }
}

const Colors = new ColorPalette();
export default Colors;
