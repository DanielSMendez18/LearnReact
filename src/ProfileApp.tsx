import { useState } from "react";

interface Company {
    name: string,
    country: string
}

interface Skill {
    skillName: string,
    score: number
}

const ProfileApp = ({name, country}: Company) => {
    const [nameUser, setName] = useState<string>('');
    const [age, setAge] = useState<number>(18);
    const [hobbies, setHobbies] = useState<string[]>(['Reading','Gaming']);
    const [skill, setSkill] = useState<Skill>({skillName:'Front End', score: 0});

    const updateName = () => {
        setName('Daniel S.M')
    }

    const incrementAge = () => {
        setAge( age => age+1)
    }

    const addHobbie = (newHobbie: string) => {
        setHobbies(prevHobbies => [...prevHobbies, newHobbie])
    }

    const updateScoreSkill = (newScore: number) => {
        setSkill(prevSkill => ({...prevSkill, score: newScore}) )
    }

    const increaseScoreSkill = () => {
        const newScore = skill.score + 1;
        updateScoreSkill(newScore);
    }

    return(
        <>
            <h1>Compañia: {name} - {country}</h1>
            <h2>Perfil del usuario</h2>
            <h3 aria-label="name-user" >Nombre: {nameUser}</h3>
            <h3 data-testid="test-value-year">Edad: {age}</h3>
            <button aria-label="update-name" onClick={updateName}>Actualizar nombre</button>
            <button data-testid="test-increment-year" onClick={incrementAge}>Aumentar edad</button>
            <br />
            <h3>Sus Hobies</h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index} >{hobby}</li>
                ))}
            </ul>
            <button aria-label="add-hobby" onClick={() => {addHobbie('Nuevo hobbie')}}>Agregar nuevo Hobbie</button>
            <br />
            <h3>Skill</h3>
            <h3 data-testid="test-value-skill">{skill.skillName} - Score: {skill.score}</h3>
            <button onClick={increaseScoreSkill} data-testid="test-increase-score">Incrementar Score</button>
        </>
    )

}

export default ProfileApp;