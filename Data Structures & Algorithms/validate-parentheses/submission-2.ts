class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        type ParenTheses = "}" | "]" | ")" | "{" | "[" | "(";

        const validateInput = (value: unknown): asserts value is ParenTheses => {
            if (typeof value !== "string" || value.trim() === "") {
                throw new Error("Invalid input");
            }
        };

        const items = s.split("");
        const PAREN_THESIS = ["}", "]", ")", "{", "[", "("];

        // Validate
        items.forEach(validateInput);

        let result = true;

        if (items.length % 2 !== 0) result = false;

        const stack: string[] = [];
        items.forEach((i) => {
            const idx = PAREN_THESIS.findIndex((item) => i === item);
            console.log(idx);
            if (idx > 2) {
                stack.push(i);
            } else {
                const latestStackItem = stack.pop();
                const itemInCloseItem = PAREN_THESIS[idx + 3];
                console.log(latestStackItem, itemInCloseItem);
                if (itemInCloseItem !== latestStackItem) result = false;
            }
        });

        if (stack.length > 0) result = false;
        return result;
    }
}
