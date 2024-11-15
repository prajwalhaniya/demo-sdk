// Let's assume SimpleCalculator as another microservice
import { SimpleCalculator } from "./service_1/index.js";

// Let's assume TrignometryCalculator also as another microservice
import { TrignometryCalculator } from "./service_2/index.js";

export {
    SimpleCalculator,
    TrignometryCalculator
}