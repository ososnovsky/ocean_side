import PlaceIcon from '@mui/icons-material/Place';
export default function MapLink() {
    return (
        <div className="rounded my-2">
            <a className="underline" target="_blank" href={'https://maps.google.com/?q=' + "R. Vista Mar 30, 8500-801 Portimão, Portugal"}>
                <PlaceIcon />
                R. Vista Mar, 8500-801 Portimão, Portugal
            </a>
        </div>
    );
}