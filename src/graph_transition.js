  const WIDTH = width
  const HEIGHT = WIDTH / 4
  const MARGIN = WIDTH / 200
  const container = DOM.svg(WIDTH, HEIGHT)
  const svg = d3.select(container)
  
  // une liste de 10 chiffres
  const DATA = Array.from(Array(10)).map(Math.random)
  
  const heightScale = d3.scaleLinear()
    .domain([0, d3.max(DATA)])
    .range([0, HEIGHT])
  const BAR_WIDTH = WIDTH / DATA.length
  
  const bars = svg.selectAll('rect')
    .data(DATA)
    .enter()
    .append('rect')
    .attr('x', (d, i) =>  i * BAR_WIDTH)
    .attr('width', BAR_WIDTH - MARGIN)
    .attr('y', d => HEIGHT - heightScale(d))
    .attr('height', heightScale)
  
 // le bouton "Update"
 const update = d3.select(updateButton0)
 
 update.on('click', () => {
   
   // une nouvelle liste de 10 chiffres
   const NEW_DATA = Array.from(Array(10)).map(Math.random)
   
   // mise à jour de l'échelle
   heightScale.domain([0, d3.max(NEW_DATA)])
   
   // mise à jour des bâtons
   bars.data(NEW_DATA)
    .transition()
    .duration(1000)
    .attr('y', d => HEIGHT - heightScale(d))
    .attr('height', heightScale)
   
 })
  
  return container