class TrignometryCalculator {
    private degreesToRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }

    public sin(theta: number): number {
        const radians = this.degreesToRadians(theta);
        return Math.sin(radians);
    }

    public cos(theta: number): number {
        const radians = this.degreesToRadians(theta);
        return Math.cos(radians);
    }

    public tan(theta: number): number {
        const radians = this.degreesToRadians(theta);
        if (Math.abs(Math.cos(radians)) < Number.EPSILON) {
            throw new Error('Tangent is undefined for this angle (90° or 270°)');
        }
        return Math.tan(radians);
    }
}

export {
    TrignometryCalculator
}