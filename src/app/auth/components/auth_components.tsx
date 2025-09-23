import Link from "next/link";
import './auth_components.scss';

export type InputProps={
    type?: "text" | "password" | "email";
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export type LinkProps={
    text: string;
    linkTitle: string;
    path: string;
}
export type ContainerProps={
    title: string;
    inputs: InputProps[];
    redirectLink: LinkProps;
    btnTitle: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function AuthContainer({title, inputs, redirectLink, btnTitle, onSubmit}:ContainerProps){
    return(

        <form id="container" onSubmit={onSubmit}>
            <div id="title-container">
                <h1>{title}</h1>
            </div>
            <div id="input-container">
                {inputs.map((input, index) => ( <AuthInput key={index} {...input}/> ))}
                
                <div id="redirect-link-container">
                    <RedirectLink
                        text={redirectLink.text}
                        linkTitle={redirectLink.linkTitle}
                        path={redirectLink.path}
                    />
                </div>
            </div>
            
            <div id="button-container">
                <button type="submit">{btnTitle}</button>
            </div>
        </form>
    )
}

function AuthInput({type = "text", placeholder, value, onChange}:InputProps){
    return(
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="placeholder-current"
        />
    )
}
function RedirectLink({text, linkTitle, path}:LinkProps){
    return(
        <p>{text} <Link id="redirect-link" href={path}>{linkTitle}</Link></p>
    )
}