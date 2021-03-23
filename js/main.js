const canvas = document.getElementById('painel');

const ctx = canvas.getContext('2d');


ctx.canvas.width = COLUNA * TAM_BLOCO;
ctx.canvas.height = LINHA * TAM_BLOCO;


ctx.scale(TAM_BLOCO, TAM_BLOCO); 

let painel = new Painel();

function play() {
	painel.reset();
	let peca = new Peca(ctx);
	peca.desenho();
	
	painel.peca = peca;
	console.table(painel.grid);
	
}
	
document.addEventListener('keydown', event => {
	if (movimento[event.keyCode]) {
		
		event.preventDefault();
		
		
		let p = movimento[event.keyCode](painel.peca);
		
		if (event.keyCode === KEY.SPACE) {
				
			while (painel.validar(p)) {
				painel.peca.mover(p);
				p = movimento[KEY.DOWN](painel.peca);
				
				ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				
				painel.peca.desenho();
				
			}
		}
		
		if(painel.validar(p)){
			console.table("linha26");
			painel.peca.mover(p);
			
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			
			painel.peca.desenho();
		}
	}
});
