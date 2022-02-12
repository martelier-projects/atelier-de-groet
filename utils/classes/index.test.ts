import classes from "./index";

describe("classes", () => {
    describe("Given a single property with value true", () => {
        // Arrange
        const input = {
            "class-name": true,
        };

        // Act
        const value = classes(input);

        // Assert
        it("returns that single key", () => {
            expect(value).toEqual("class-name");
        });
    });

    describe("Given multiple properties with the value true", () => {
        // Arrange
        const input = {
            "class-name": true,
            "class-name-two": true,
        };

        // Act
        const value = classes(input);

        // Assert
        it("returns all keys", () => {
            expect(value).toEqual("class-name class-name-two");
        });
    });

    describe("Given single properties with the value false", () => {
        // Arrange
        const input = {
            "class-name": false,
        };

        // Act
        const value = classes(input);

        // Assert
        it("Returns an empty string", () => {
            expect(value).toEqual("");
        });
    });

    describe("Given multiple properties with the value false", () => {
        // Arrange
        const input = {
            "class-name": false,
            "class-name-two": false,
        };

        // Act
        const value = classes(input);

        // Assert
        it("Returns an empty string", () => {
            expect(value).toEqual("");
        });
    });

    describe("Given multiple properties with true or false", () => {
        // Arrange
        const input = {
            "class-name": false,
            "class-name-two": true,
            "class-name-three": false,
            "class-name-four": true,
        };

        // Act
        const value = classes(input);

        // Assert
        it("Returns the keys of all items with a truthy value", () => {
            expect(value).toEqual("class-name-two class-name-four");
        });
    });
});
