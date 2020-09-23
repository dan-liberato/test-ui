import React, { useState } from "react";

import Date from "../assets/svg/Icon/Date.svg";
import Image from "../assets/svg/Icon/Image.svg";
import Person from "../assets/svg/Icon/Person.svg";
import Place from "../assets/svg/Icon/Place.svg";
import Search from "../assets/svg/Icon/Search.svg";

import Menu from "../components/Menu";
import Input from "../components/Input";

import {
	Page,
	Container,
	Title,
	Description,
	TravelsForm,
	FieldGroup,
	Field,
	FieldContent,
	Label,
	Checkbox,
	Checked,
	Footer,
	SearchTravel,
} from '../styles/styles';

const trip = ["Ida e volta", "Só ida", "Só volta"]

const data = {
	"origem": "São Paulo, Brazil",
	"destino": "São Paulo, Brazil",
	"data": "Sábado 14/4 - Quinta 18/4",
	"pessoas": 1
}

const Home = () => {
	const [isChecked, setIsChecked] = useState(trip[0]);
	const [origin, setOrigin] = useState(data.origem);
	const [destiny, setDestiny] = useState(data.destino);
	const [date, setDate] = useState(data.data);
	const [amountPeople, setAmountPeople] = useState(data.pessoas);

	return (
		<Page>
			<Container>
				<Menu />
				<Title>Viaje pelo mundo inteiro</Title>
				<Description>Aqui você encontra os melhores voos do mundo</Description>

				<TravelsForm>
					<FieldGroup>
						{trip.map(option => (
							<Label key={option}>
								{option}
								<Checkbox
									type="radio"
									name="trip"
									value={option}
									checked={isChecked === option}
									onChange={e => setIsChecked(e.currentTarget.value)}
								/>
								<Checked></Checked>
							</Label>
						))}
					</FieldGroup>

					<FieldGroup className="no-padding-top grid">
						<Field>
							<Label htmlFor="origin">	Origem </Label>

							<FieldContent>
								<Image size={34} />
								<Input
									type="text"
									name="city"
									value={origin}
									onChange={e => setOrigin(e.currentTarget.value)}
									placeholder="Insira a cidade ou destino"
									required
								/>
							</FieldContent>
						</Field>

						<Field>
							<Label htmlFor="destiny">Destino</Label>

							<FieldContent>
								<Place size={34} />
								<Input
									type="text"
									name="destiny"
									value={destiny}
									onChange={e => setDestiny(e.currentTarget.value)}
									placeholder="Insira a cidade ou destino"
									required
								/>
							</FieldContent>
						</Field>

						<Field>
							<Label htmlFor="date">Data de Ida / Retorno</Label>

							<FieldContent>
								<Date size={34} />
								<Input
									type="text"
									name="date"
									value={date}
									onChange={e => setDate(e.currentTarget.value)}
									placeholder="Ex Segunda 20/11 - Domingo 25/11"
									required
								/>
							</FieldContent>
						</Field>

						<Field className="mg-left">
							<Label htmlFor="amount">Número de pessoas</Label>

							<FieldContent>
								<Person size={34} />
								<Input
									type="text"
									name="amount"
									value={amountPeople}
									onChange={e => setAmountPeople(e.currentTarget.value)}
									placeholder="Insira o número de pessoas"
									required
								/>
							</FieldContent>
						</Field>
					</FieldGroup>

					<Footer>
						<SearchTravel type="submit">
							<Search size={20}/>
							Busque as viagens
						</SearchTravel>
					</Footer>
				</TravelsForm>
			</Container>
		</Page>
	);
};

Home.displayName = "Home";
export default Home;
