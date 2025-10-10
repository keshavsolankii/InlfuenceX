
// ==================== CTA SECTION ====================
function CTASection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e_1px,transparent_1px),linear-gradient(to_bottom,#0f766e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Transform Your Brand?
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Let's discuss how we can help you achieve your marketing goals and scale your business through strategic partnerships.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-teal-600 text-white px-10 py-5 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 shadow-2xl shadow-teal-600/30 hover:shadow-teal-600/50 hover:scale-105"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}