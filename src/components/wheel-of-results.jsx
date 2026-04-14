import { useState, useEffect, useRef, useCallback } from "react";

const TIBERIUS_RED = "#DC2626";
const RED_GLOW = "rgba(220, 38, 38, 0.15)";
const RED_LIGHT = "rgba(220, 38, 38, 0.08)";
const BG = "#FAFAF8";
const CARD_BG = "#FFFFFF";
const DARK_TEXT = "#1A1A1A";
const MED_TEXT = "#555555";
const LIGHT_BORDER = "#E8E8E4";
const GOLD = "#D4A017";
const GOLD_GLOW = "rgba(212, 160, 23, 0.3)";

const services = [
  {
    id: "voice",
    label: "AI Voice\nAgents",
    shortLabel: "Voice Agents",
    pct: 89,
    statLabel: "Calls Answered",
    tagline: "Every call. Every lead. 24/7.",
    iconPath: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8",
  },
  {
    id: "websites",
    label: "Talking\nWebsites",
    shortLabel: "Talking Websites",
    pct: 73,
    statLabel: "More Engagement",
    tagline: "Your site speaks. Visitors convert.",
    iconPath: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM9 9h6M9 13h4",
  },
  {
    id: "proposals",
    label: "AI\nProposals",
    shortLabel: "AI Proposals",
    pct: 82,
    statLabel: "Faster Turnaround",
    tagline: "Hours to minutes. Win more bids.",
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
  },
  {
    id: "vision",
    label: "AI Vision\nQuoting",
    shortLabel: "Vision Quoting",
    pct: 91,
    statLabel: "Quote Accuracy",
    tagline: "Snap. Quote. Close. On-site.",
    iconPath: "M3 3h18v18H3zM8.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM21 15l-5-5L5 21",
  },
];

const WHEEL_SIZE = 380;
const CENTER = WHEEL_SIZE / 2;
const OUTER_R = 170;
const INNER_R = 95;
const GAP_ANGLE = 4;

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx, cy, innerR, outerR, startAngle, endAngle) {
  const outerStart = polarToCartesian(cx, cy, outerR, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, endAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerEnd.x} ${innerEnd.y}`,
    "Z",
  ].join(" ");
}

function StatCounter({ value, active }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!active) {
      setCount(0);
      startRef.current = null;
      return;
    }
    const target = value;
    const duration = 1400;

    function tick(now) {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, value]);

  return <>{count}</>;
}

function SparkBurst({ active }) {
  if (!active) return null;
  const sparks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const dist = 55 + Math.random() * 25;
    return {
      id: i,
      tx: Math.cos(angle) * dist,
      ty: Math.sin(angle) * dist,
      delay: Math.random() * 0.2,
      size: 2 + Math.random() * 3,
    };
  });

  return (
    <g>
      {sparks.map((s) => (
        <circle
          key={s.id}
          cx={CENTER}
          cy={CENTER}
          r={s.size}
          fill={GOLD}
          opacity="0"
          style={{
            animation: `sparkFly 0.8s ease-out ${s.delay}s forwards`,
            "--tx": `${s.tx}px`,
            "--ty": `${s.ty}px`,
          }}
        />
      ))}
    </g>
  );
}

function WheelSegment({ index, service, isActive, onActivate, fillPct }) {
  const segAngle = 360 / services.length;
  const startAngle = index * segAngle + GAP_ANGLE / 2;
  const endAngle = (index + 1) * segAngle - GAP_ANGLE / 2;
  const fullArc = arcPath(CENTER, CENTER, INNER_R, OUTER_R, startAngle, endAngle);

  const fillEndAngle = startAngle + (endAngle - startAngle) * (fillPct / 100);
  const fillArc = fillPct > 0 ? arcPath(CENTER, CENTER, INNER_R, OUTER_R, startAngle, fillEndAngle) : "";

  const midAngle = (startAngle + endAngle) / 2;
  const labelR = (INNER_R + OUTER_R) / 2;
  const labelPos = polarToCartesian(CENTER, CENTER, labelR, midAngle);

  const iconR = OUTER_R + 28;
  const iconPos = polarToCartesian(CENTER, CENTER, iconR, midAngle);

  return (
    <g
      style={{ cursor: "pointer" }}
      onClick={() => onActivate(index)}
      onMouseEnter={() => onActivate(index)}
    >
      {/* Background segment */}
      <path
        d={fullArc}
        fill={isActive ? RED_LIGHT : "#F0F0EC"}
        stroke={isActive ? TIBERIUS_RED : LIGHT_BORDER}
        strokeWidth={isActive ? 2 : 1}
        style={{
          transition: "all 0.4s ease",
          filter: isActive ? `drop-shadow(0 0 12px ${RED_GLOW})` : "none",
        }}
      />

      {/* Fill arc (the animated result) */}
      {fillPct > 0 && (
        <path
          d={fillArc}
          fill={TIBERIUS_RED}
          opacity={isActive ? 0.9 : 0}
          style={{
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* Label text */}
      <text
        x={labelPos.x}
        y={labelPos.y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={isActive ? "#FFFFFF" : MED_TEXT}
        fontSize="11"
        fontWeight="700"
        fontFamily="'Outfit', 'DM Sans', sans-serif"
        letterSpacing="0.02em"
        style={{
          transition: "fill 0.3s ease",
          pointerEvents: "none",
        }}
      >
        {service.label.split("\n").map((line, li) => (
          <tspan key={li} x={labelPos.x} dy={li === 0 ? "-0.4em" : "1.15em"}>
            {line}
          </tspan>
        ))}
      </text>

      {/* Outer icon */}
      <g
        transform={`translate(${iconPos.x - 10}, ${iconPos.y - 10}) scale(0.85)`}
        opacity={isActive ? 1 : 0.3}
        style={{ transition: "opacity 0.3s ease", pointerEvents: "none" }}
      >
        <path
          d={service.iconPath}
          fill="none"
          stroke={isActive ? TIBERIUS_RED : MED_TEXT}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "stroke 0.3s ease" }}
        />
      </g>
    </g>
  );
}

export default function WheelOfResults() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [fillPcts, setFillPcts] = useState(services.map(() => 0));
  const [hasRevealed, setHasRevealed] = useState(services.map(() => false));
  const [autoPlay, setAutoPlay] = useState(true);
  const [showBurst, setShowBurst] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const activateSegment = useCallback(
    (index) => {
      setActiveIndex(index);
      setShowBurst(false);

      // Animate the fill
      const target = services[index].pct;
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setFillPcts((prev) => {
          const next = [...prev];
          next[index] = eased * target;
          return next;
        });
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          // Fire sparks at completion
          setShowBurst(true);
          setHasRevealed((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }
      }

      // Reset this segment
      setFillPcts((prev) => {
        const next = [...prev];
        next[index] = 0;
        return next;
      });
      setTimeout(() => requestAnimationFrame(tick), 50);
    },
    []
  );

  // Auto-play cycle
  useEffect(() => {
    if (!autoPlay) return;
    // Start first one after a short delay
    const startDelay = setTimeout(() => {
      activateSegment(0);
    }, 800);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % services.length;
        activateSegment(next);
        return next;
      });
    }, 4200);

    return () => {
      clearTimeout(startDelay);
      clearInterval(intervalRef.current);
    };
  }, [autoPlay, activateSegment]);

  const handleActivate = (index) => {
    setAutoPlay(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    activateSegment(index);
    timeoutRef.current = setTimeout(() => setAutoPlay(true), 12000);
  };

  const active = activeIndex >= 0 ? services[activeIndex] : null;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px",
        fontFamily: "'Outfit', 'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 36, position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: TIBERIUS_RED,
              fontWeight: 700,
              background: RED_LIGHT,
              padding: "5px 12px",
              borderRadius: 100,
              border: `1px solid rgba(220,38,38,0.15)`,
            }}
          >
            Spin to See Your Edge
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 800,
            color: DARK_TEXT,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          The Wheel of{" "}
          <span
            style={{
              color: TIBERIUS_RED,
              position: "relative",
            }}
          >
            Results
            <svg
              width="100%"
              height="8"
              viewBox="0 0 200 8"
              style={{ position: "absolute", bottom: -4, left: 0, right: 0 }}
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q50 0 100 5 T200 5"
                fill="none"
                stroke={TIBERIUS_RED}
                strokeWidth="2.5"
                opacity="0.4"
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Wheel + Center Display */}
      <div
        style={{
          position: "relative",
          width: WHEEL_SIZE,
          height: WHEEL_SIZE,
          zIndex: 1,
        }}
      >
        <svg
          width={WHEEL_SIZE}
          height={WHEEL_SIZE}
          viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
          style={{ overflow: "visible" }}
        >
          {/* Outer decorative ring */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={OUTER_R + 6}
            fill="none"
            stroke={active ? `${TIBERIUS_RED}22` : "#E8E8E4"}
            strokeWidth="1"
            strokeDasharray="4 4"
            style={{
              transition: "stroke 0.4s ease",
              animation: "spinSlow 60s linear infinite",
              transformOrigin: `${CENTER}px ${CENTER}px`,
            }}
          />

          {/* Segments */}
          {services.map((service, i) => (
            <WheelSegment
              key={service.id}
              index={i}
              service={service}
              isActive={i === activeIndex}
              onActivate={handleActivate}
              fillPct={fillPcts[i]}
            />
          ))}

          {/* Spark burst */}
          <SparkBurst active={showBurst && activeIndex >= 0} />

          {/* Center circle */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={INNER_R - 4}
            fill={CARD_BG}
            stroke={active ? TIBERIUS_RED : LIGHT_BORDER}
            strokeWidth={active ? 2.5 : 1}
            style={{
              transition: "stroke 0.4s ease, stroke-width 0.4s ease",
              filter: active ? `drop-shadow(0 0 20px ${RED_GLOW})` : "none",
            }}
          />

          {/* Pulsing ring on active */}
          {active && (
            <circle
              cx={CENTER}
              cy={CENTER}
              r={INNER_R - 4}
              fill="none"
              stroke={TIBERIUS_RED}
              strokeWidth="1"
              opacity="0"
              style={{ animation: "ringPulse 2s ease-out infinite" }}
            />
          )}

          {/* Center content */}
          {active ? (
            <g>
              {/* Big percentage */}
              <text
                x={CENTER}
                y={CENTER - 12}
                textAnchor="middle"
                dominantBaseline="central"
                fill={TIBERIUS_RED}
                fontSize="44"
                fontWeight="800"
                fontFamily="'Outfit', 'DM Sans', sans-serif"
                letterSpacing="-0.03em"
              >
                <StatCounter value={active.pct} active={true} />%
              </text>
              {/* Stat label */}
              <text
                x={CENTER}
                y={CENTER + 20}
                textAnchor="middle"
                fill={MED_TEXT}
                fontSize="11"
                fontWeight="600"
                fontFamily="'Outfit', 'DM Sans', sans-serif"
                textTransform="uppercase"
                letterSpacing="0.08em"
              >
                {active.statLabel}
              </text>
              {/* Decorative line */}
              <line
                x1={CENTER - 25}
                y1={CENTER + 35}
                x2={CENTER + 25}
                y2={CENTER + 35}
                stroke={`${TIBERIUS_RED}33`}
                strokeWidth="1"
              />
            </g>
          ) : (
            <g>
              <text
                x={CENTER}
                y={CENTER - 6}
                textAnchor="middle"
                dominantBaseline="central"
                fill={MED_TEXT}
                fontSize="13"
                fontWeight="600"
                fontFamily="'Outfit', 'DM Sans', sans-serif"
              >
                Tap a service
              </text>
              <text
                x={CENTER}
                y={CENTER + 14}
                textAnchor="middle"
                fill={"#999"}
                fontSize="11"
                fontFamily="'Outfit', 'DM Sans', sans-serif"
              >
                to see the impact
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom tagline card */}
      <div
        style={{
          marginTop: 32,
          textAlign: "center",
          minHeight: 60,
          position: "relative",
          zIndex: 1,
        }}
      >
        {active && (
          <div
            key={active.id}
            style={{
              animation: "fadeSlideUp 0.4s ease-out",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: DARK_TEXT,
                margin: "0 0 4px",
                letterSpacing: "-0.01em",
              }}
            >
              {active.shortLabel}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: MED_TEXT,
                margin: 0,
                fontWeight: 400,
              }}
            >
              {active.tagline}
            </p>
          </div>
        )}
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 20,
          position: "relative",
          zIndex: 1,
        }}
      >
        {services.map((s, i) => (
          <button
            key={s.id}
            onClick={() => handleActivate(i)}
            style={{
              width: i === activeIndex ? 28 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              backgroundColor: i === activeIndex ? TIBERIUS_RED : "#D4D4D0",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ringPulse {
          0% { r: ${INNER_R - 4}; opacity: 0.5; }
          100% { r: ${INNER_R + 15}; opacity: 0; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes sparkFly {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          70% { opacity: 0.8; }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
          }
        }
      `}</style>
    </div>
  );
}
