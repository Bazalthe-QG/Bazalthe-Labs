import ExampleBox from '../../../components/ExampleBox'
import { Page, Grid } from '../../../system'
import Product from './Product'
import Pricing from './Pricing'
import HorizontalProduct from './HorizontalProduct'
import AppCard from './AppCard'

const CAT = 'cards'

/**
 * Cards - Product
 * @returns {JSX.Element}
 */
export default function CardsProductIndex() {
  return (
    <Page>
      <Grid>
        <ExampleBox id="cards-product" label="Product" category={CAT} size="auto" className="w-52">
          <Product />
        </ExampleBox>
        <ExampleBox id="cards-pricing" label="Pricing" category={CAT} size="auto" className="w-52">
          <Pricing />
        </ExampleBox>
        <ExampleBox id="cards-ecom-horizontal" label="Horizontal product" category={CAT} size="auto" className="w-72">
          <HorizontalProduct />
        </ExampleBox>
        <ExampleBox id="cards-app" label="App card" category={CAT} size="auto" className="w-52">
          <AppCard />
        </ExampleBox>
      </Grid>
    </Page>
  )
}
