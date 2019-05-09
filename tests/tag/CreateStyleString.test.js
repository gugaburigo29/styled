import {createStyleString} from "../../src/modules/tag/create-style-string";

test('Execute the function whit tag functions', () => {
    const style = createStyleString`
        ${ () => `width: ${ 100 + 20 }px` }
    `;

    expect(style).toContain('width: 120px')
});
