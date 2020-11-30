import {React} from 'react'
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";




const Price = ({value, onChange}) => {

  return (
    <div>
      <Typography id="range-slider" gutterBottom color="textPrimary">
            Price range
          </Typography>
          <Slider
            value={value}
            onChange={onChange}
            valueLabelDisplay="auto"
            min={0}
            max={32}
            step={2}
          />
    </div>
  )
}

export default Price
