import * as yup from "yup";
import Role from "@/interfaces/Role";

export default yup.object({
    name: yup.string().required("O nome é requerido."),
    phone: yup.string().required("O telefone é requerido."),
    role: yup.string().required("O gênero é requerido.").default(Role.CLIENT),
    email: yup.string().email().required("O email é requerido."),
});