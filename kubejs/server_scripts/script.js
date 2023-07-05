// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

ServerEvents.recipes(event => {
    // Witch Eye
	event.recipes.summoningrituals.altar("minecraft:ender_eye")
	.input(Ingredient.of('endrem:witch_pupil', 1))
	.itemOutput('1x endrem:witch_eye')
	
	//Exotic Eye
	event.recipes.summoningrituals.altar("minecraft:ender_eye")
	.input(Ingredient.of('minecraft:bubble_coral', 1))
	.input(Ingredient.of('minecraft:fire_coral', 1))
	.input(Ingredient.of('minecraft:horn_coral', 1))
	.input(Ingredient.of('minecraft:tube_coral', 1))
	.input(Ingredient.of('minecraft:conduit', 2))
	.input(Ingredient.of('minecraft:glow_ink_sac', 2))
	.itemOutput('1x endrem:exotic_eye')
	
	// Extract Materials from Vanilla Weapons & Armors
	
	// Leather
	event.recipes.summoningrituals.altar("minecraft:leather_helmet")
	.itemOutput('1x minecraft:leather')
	
	event.recipes.summoningrituals.altar("minecraft:leather_chestplate")
	.itemOutput('1x minecraft:leather')
	
	event.recipes.summoningrituals.altar("minecraft:leather_leggings")
	.itemOutput('1x minecraft:leather')
	
	event.recipes.summoningrituals.altar("minecraft:leather_boots")
	.itemOutput('1x minecraft:leather')
	
	// Chainmail
	event.recipes.summoningrituals.altar("minecraft:chainmail_helmet")
	.itemOutput('1x minecraft:iron_nugget')
	
	event.recipes.summoningrituals.altar("minecraft:chainmail_chestplate")
	.itemOutput('1x minecraft:iron_nugget')
	
	event.recipes.summoningrituals.altar("minecraft:chainmail_leggings")
	.itemOutput('1x minecraft:iron_nugget')
	
	event.recipes.summoningrituals.altar("minecraft:chainmail_boots")
	.itemOutput('1x minecraft:iron_nugget')
	
	// Iron
	event.recipes.summoningrituals.altar("minecraft:iron_helmet")
	.itemOutput('1x minecraft:iron_ingot')

	event.recipes.summoningrituals.altar("minecraft:iron_chestplate")
	.itemOutput('1x minecraft:iron_ingot')

	event.recipes.summoningrituals.altar("minecraft:iron_leggings")
	.itemOutput('1x minecraft:iron_ingot')

	event.recipes.summoningrituals.altar("minecraft:iron_boots")
	.itemOutput('1x minecraft:iron_ingot')

	event.recipes.summoningrituals.altar("minecraft:iron_sword")
	.itemOutput('1x minecraft:iron_ingot')

	event.recipes.summoningrituals.altar("minecraft:iron_shovel")
	.itemOutput('1x minecraft:iron_ingot')

	event.recipes.summoningrituals.altar("minecraft:iron_pickaxe")
	.itemOutput('1x minecraft:iron_ingot')

	event.recipes.summoningrituals.altar("minecraft:iron_axe")
	.itemOutput('1x minecraft:iron_ingot')

	event.recipes.summoningrituals.altar("minecraft:iron_hoe")
	.itemOutput('1x minecraft:iron_ingot')
	
	// Golden
	event.recipes.summoningrituals.altar("minecraft:golden_helmet")
	.itemOutput('1x minecraft:gold_ingot')
	
	event.recipes.summoningrituals.altar("minecraft:golden_chestplate")
	.itemOutput('1x minecraft:gold_ingot')
	
	event.recipes.summoningrituals.altar("minecraft:golden_leggings")
	.itemOutput('1x minecraft:gold_ingot')
	
	event.recipes.summoningrituals.altar("minecraft:golden_boots")
	.itemOutput('1x minecraft:gold_ingot')
	
	event.recipes.summoningrituals.altar("minecraft:golden_sword")
	.itemOutput('1x minecraft:gold_ingot')

	event.recipes.summoningrituals.altar("minecraft:golden_shovel")
	.itemOutput('1x minecraft:gold_ingot')

	event.recipes.summoningrituals.altar("minecraft:golden_pickaxe")
	.itemOutput('1x minecraft:gold_ingot')

	event.recipes.summoningrituals.altar("minecraft:golden_axe")
	.itemOutput('1x minecraft:gold_ingot')

	event.recipes.summoningrituals.altar("minecraft:golden_hoe")
	.itemOutput('1x minecraft:gold_ingot')
	
	// Diamond
	event.recipes.summoningrituals.altar("minecraft:diamond_helmet")
	.itemOutput('1x minecraft:diamond')
	
	event.recipes.summoningrituals.altar("minecraft:diamond_chestplate")
	.itemOutput('1x minecraft:diamond')
	
	event.recipes.summoningrituals.altar("minecraft:diamond_leggings")
	.itemOutput('1x minecraft:diamond')
	
	event.recipes.summoningrituals.altar("minecraft:diamond_boots")
	.itemOutput('1x minecraft:diamond')
	
	event.recipes.summoningrituals.altar("minecraft:diamond_sword")
	.itemOutput('1x minecraft:diamond')

	event.recipes.summoningrituals.altar("minecraft:diamond_shovel")
	.itemOutput('1x minecraft:diamond')

	event.recipes.summoningrituals.altar("minecraft:diamond_pickaxe")
	.itemOutput('1x minecraft:diamond')

	event.recipes.summoningrituals.altar("minecraft:diamond_axe")
	.itemOutput('1x minecraft:diamond')

	event.recipes.summoningrituals.altar("minecraft:diamond_hoe")
	.itemOutput('1x minecraft:diamond')
	
	
});