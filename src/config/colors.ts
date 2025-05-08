class ColorPalette {
    private primary: string;
    private secondary: string;
    private background: string;
    private background50: string;
    private textPrimary: string;
    private textSecondary: string;

    constructor() {
        this.primary = "#3FBF69";
        this.secondary = "#F9FBFC";
        this.background = "#131217";
        this.background50 = "#18181C";
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

    get Background50(): string {
        return this.background50;
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
