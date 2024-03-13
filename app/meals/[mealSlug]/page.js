import Link from "next/link";

export default function MealDetailsPage({ params }) {
    return (
        <section>
            <h1>Meal Details</h1>
            <p>{params.mealSlug}</p>
            <p>
                <Link href="/">Back to Home</Link>
            </p>
        </section>
    );
}
