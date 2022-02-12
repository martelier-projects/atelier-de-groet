interface Items {
    [className: string]: boolean | undefined;
}

/**
 * Create string of classnames based on the value.
 */
export default function classes(items: Items): string {
    return (
        Object.entries(items)
            .filter(([key, value]) => value)
            .map(([key, value]) => key)
            .join(" ") || ""
    );
}

// Usage example:
// const className = classes({
//     [styles["text-media"]]: true,
//     [styles["text-media--media-right"]]: mirrored,
// });
