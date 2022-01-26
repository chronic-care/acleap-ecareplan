import '../../Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FHIRData } from '../../models/fhirResources';
import { PatientSummary, ScreeningSummary } from '../../models/cqlSummary';
import { Observation } from '../../fhir-types/fhir-r4';

interface ObservationListProps {
  fhirData?: FHIRData,
  patientSummary?: PatientSummary,
  screenings?: [ScreeningSummary]
}

interface ObservationListState {
}

export class ObservationList extends React.Component<ObservationListProps, ObservationListState> {

  constructor(props: ObservationListProps) {
    super(props);
    this.state = {
    };
  }

  public render(): JSX.Element {
    let observations = this.props.fhirData?.labResults

    return (
      <div className="home-view">
        <div className="welcome">
          <h4 className="title">Test Results</h4>

          <ul>
            {observations?.map((obs, idx) => (
              <li key={idx.toString()}><Link to={{
                pathname: '/observation',
                state: { observation: obs }
              }}>{obs.code.text ?? obs.code.coding![0].display}</Link>
              </li>))}
            </ul>
        </div>
      </div>
    )
  }

}
