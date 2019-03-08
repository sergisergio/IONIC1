import { Appareil } from '../models/Appareil';

export class AppareilsService {
    appareilsList = [
        {
            name: 'Machine à laver',
            description: [
                'Volume: 6 litres',
                'Temps de lavage: 2 heures',
                'Consommation: 173 kWh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
            name: 'Télévision',
            description: [
                'Dimensions: 40 pouces',
                'Consommation: 22 kWh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
            name: 'Ordinateur',
            description: [
                'Marque: fait maison',
                'Consommation: 500 kWh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        }
    ];

    addAppareil(appareil: Appareil) {
        this.appareilsList.push(appareil);
    }
}
