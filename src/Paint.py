import tkinter as tk

def draw_square(event):
    size = 15
    x, y = event.x, event.y
    # Combinar detección de click inicial y movimiento
    button = getattr(event, 'num', None)
    if (button == 1) or (event.state & 0x100):
        color = 'black'
    elif (button == 3) or (event.state & 0x400):
        color = 'white'
    else:
        return
    canvas.create_rectangle(
        x - size, 
        y - size,
        x + size,
        y + size,
        fill=color,
        outline='#f0f0f0' if color == 'white' else color  # Usar color de fondo para efecto borrado
    )

def draw_line(x1, y1, x2, y2, color):
    puntos = []
    dx = abs(x2 - x1)
    dy = abs(y2 - y1)
    steep = dy > dx
    
    # Intercambiar coordenadas si la pendiente es mayor a 1
    if steep:
        x1, y1 = y1, x1
        x2, y2 = y2, x2
        dx, dy = dy, dx
        
    # Invertir dirección si es necesario
    invertir = x1 > x2
    if invertir:
        x1, x2 = x2, x1
        y1, y2 = y2, y1
        
    # Calcular parámetros del algoritmo
    error = 0
    delta_error = dy * 2
    y = y1
    y_step = 1 if y1 < y2 else -1
    
    # Algoritmo de Bresenham
    for x in range(x1, x2 + 1):
        coord = (y, x) if steep else (x, y)
        puntos.append(coord)
        error += delta_error
        
        if error >= dx:
            y += y_step
            error -= dx * 2
            
    # Dibujar cada punto del algoritmo
    size = 15  # Mismo tamaño que en draw_square
    for x, y in puntos:
        canvas.create_rectangle(
            x - size,
            y - size,
            x + size,
            y + size,
            fill=color,
        outline='#f0f0f0' if color == 'white' else color  # Coincidir con el fondo para borrar
        )
    




root = tk.Tk()
root.title("Canvas con Pixel Central")

canvas = tk.Canvas(root, width=400, height=400, bg='#f0f0f0')
canvas.pack()
def on_canvas_click(event):
    if line_mode_active:
        capture_line_point(event)
    else:
        draw_square(event)

canvas.bind('<Button-1>', on_canvas_click)
canvas.bind('<B1-Motion>', draw_square)
canvas.bind('<Button-3>', draw_square)
canvas.bind('<B3-Motion>', draw_square)

# Variables de estado para dibujo de líneas
line_start = None
current_color = 'black'
line_marker = None
line_mode_active = False

def start_line_mode(_):
    global line_start, line_marker, line_mode_active
    line_mode_active = True
    line_start = None
    line_marker = None

def capture_line_point(event):
    global line_start, line_marker
    if line_start is None:
        # Primer punto
        line_start = (event.x, event.y)
        # Dibujar marcador temporal
        line_marker = canvas.create_rectangle(
            event.x - 15, event.y - 15,
            event.x + 15, event.y + 15,
            fill='red', outline='black'
        )
    else:
        # Segundo punto - dibujar línea
        global line_mode_active
        draw_line(*line_start, event.x, event.y, current_color)
        canvas.delete(line_marker)
        line_start = None
        line_mode_active = False  # Salir del modo línea

# Configurar teclas
root.bind('<KeyPress-l>', start_line_mode)
root.bind('<KeyPress-Escape>', lambda e: globals().update({
    'line_start': None,
    'line_mode_active': False,
    'line_marker': None
}))

root.mainloop()
