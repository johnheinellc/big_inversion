import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      {/* <PersonCard firstName = {"John"}lastName = {"Heine"}age = {34}hairColor = {"Red"}></PersonCard>
      <PersonCard firstName = {"Marry"}lastName = {"Blige"}age = {51}hairColor = {"Blonde"}></PersonCard>
      <PersonCard firstName = {"Jimmy"}lastName = {"Hendrix"}age = {80}hairColor = {"Black"}></PersonCard>
      <PersonCard firstName = {"Frank"}lastName = {"Sinatra"}age = {107}hairColor = {"Brown"}></PersonCard> */}
      <PersonCard firstName="John" lastName="Smith" age={8} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Doe" age={18} hairColor="Red" />
      <PersonCard firstName="Mark" lastName="Clark" age={34} hairColor="Black" />
      <PersonCard firstName="Sam" lastName="Bo" age={78} hairColor="Grey" />


    </div>
  );
}

export default App;
