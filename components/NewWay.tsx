export default function NewWay() {
	return (
		<div className="drop-shadow-2xl py-8">
			<div className="bg-slate-900 text-white pb-8">
				<div className="grid place-content-center">
					<h2 className="p-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500">
						The New Way (Wyatt)
					</h2>
				</div>
				<div className="grid grid-cols-2 gap-4 pl-64">
					<p className="text-right">
						Nowadays, everything is automated. Some tools are made
						with a CNC machine, where you take a slab of material
						and cut it down until it represents what you want. A
						computer gets an object that it needs to cut a block
						down to and it computes paths for the drill to take to
						make what you want. This is pretty wasteful since it can
						be hard to reuse the scraps that are sawed off.
					</p>
					<img
						src="https://www.uti.edu/images/default-source/racetrack-pages/common-types-of-cnc-machines.jpg?sfvrsn=5297b630_1"
						alt="CNC Machine (if you see this then something is broken)"
						className="w-96 rounded transition hover:skew-y-6 hover:skew-x-3 drop-shadow-lg"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4 p-3 pr-64">
					<div className="grid place-content-end p-4">
						<img
							src="https://www.creality3dofficial.com/files/goods/20210917/Ender-3PRO.jpg"
							alt="3D Printer (if you see this then something is broken)"
							className="w-48 rounded transition hover:skew-y-6 hover:skew-x-3 drop-shadow-lg"
						/>
					</div>
					<p>
						Other tools are made using a 3D printer, which starts
						with a roll of material, and constructively makes the
						thing by making layers of materials. This is *extremely*
						slow, but due to new innovations in materials, a resin
						printer can go almost 20x faster because instead of
						doing one line of one layer at a time, it goes 1 layer
						at a time.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-4 pl-64">
					<p className="text-right">
						However, for something that is probably used more today,
						people make tools assisted with machines that can help
						them. The machines can make the tools stronger and more
						durable.
					</p>
					<img
						src="https://www.patterson-rothwell.co.uk/wp-content/uploads/2018/11/patterson-rothwell-toolmaking-machine.jpg"
						alt="Honestly No Idea (if you see this then something is broken)"
						className="w-64 transition hover:skew-y-6 hover:skew-x-3 drop-shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
}
